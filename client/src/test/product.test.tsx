import { act, fireEvent, render, waitFor } from "@testing-library/react";

import Product from "../pages/product";

import { Layout } from "@/components/layout/Layout";
import { CartProductsProvider } from "@/providers/CartProducts";
import { mockProduct } from "./__mocks__/product";

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(
    <CartProductsProvider>
      <Layout>
        <Product product={mockProduct} />
      </Layout>
    </CartProductsProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toBeInTheDocument();

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(
    <CartProductsProvider>
      <Layout>
        <Product product={mockProduct} />
      </Layout>
    </CartProductsProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  act(() => {
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
  });

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");

  act(() => {
    fireEvent.click(addToBasketElement);
  });

  await waitFor(() => {
    const basketItems = getByTitle("Basket items");

    expect(basketItems).not.toBeNull();
  });
});
