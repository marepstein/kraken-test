// eslint-disable-next-line no-restricted-imports
import { ApolloClient } from "@apollo/client";
import { renderHook } from "@testing-library/react";
import { FC, PropsWithChildren } from "react";
import { withApolloProvider } from "./hooks/withApolloProvider";
import { withCartProductsProvider } from "./hooks/withCartProductsProvider";

export interface IProviderOptions {
  client?: ApolloClient<any>;
}

const MockWrapper: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

export const renderHookWithProviders = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  options: IProviderOptions = {}
) => {
  const Wrapper: FC<any> = withApolloProvider(
    withCartProductsProvider(MockWrapper),
    options?.client
  );

  return renderHook(hook, {
    wrapper: Wrapper,
  });
};
