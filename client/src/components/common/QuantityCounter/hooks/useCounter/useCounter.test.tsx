import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should initialize quantity as 1", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.quantity).toBe(1);
  });

  it("should increment quantity up to maxQuantity", () => {
    const { result } = renderHook(() => useCounter(3));

    act(() => {
      result.current.increment();
    });

    expect(result.current.quantity).toBe(2);

    act(() => {
      result.current.increment();
    });

    expect(result.current.quantity).toBe(3);

    act(() => {
      result.current.increment();
    });

    expect(result.current.quantity).toBe(3);
  });

  it("should decrement quantity down to 1", () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.quantity).toBe(3);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.quantity).toBe(2);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.quantity).toBe(1);
  });
});
