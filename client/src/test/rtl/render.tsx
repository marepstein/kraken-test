import { render } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";

import { ApolloClient } from "@apollo/client";
import { withApolloProvider } from "./hooks/withApolloProvider";
import { withCartProductsProvider } from "./hooks/withCartProductsProvider";

export interface IProviderOptions {
  client: ApolloClient<any>;
}

type TRenderWithProvidersProps = (
  ui: ReactElement,
  options?: IProviderOptions
) => ReturnType<typeof render>;

const MockWrapper: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

export const renderWithProviders: TRenderWithProvidersProps = (ui, options) => {
  const Wrapper: FC = withApolloProvider(
    withCartProductsProvider(MockWrapper),
    options?.client
  );

  return render(ui, {
    wrapper: Wrapper,
  });
};
