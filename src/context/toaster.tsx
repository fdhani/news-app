import {
  useState,
  useEffect,
  useCallback,
  useContext,
  PropsWithChildren,
  createContext,
  useMemo,
} from "react";

export const ToasterContext = createContext<{
  showToaster: (text: string) => void;
  state: {
    text: string;
    display: boolean;
  };
}>(null);

export const ToasterProvider = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const { children } = props;
  const [state, setState] = useState({ text: "", display: false });

  const showToaster = useCallback((text: string) => {
    setState({
      text,
      display: true,
    });
  }, []);

  const hideToaster = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      display: false,
    }));
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (state.display) {
      setTimeout(hideToaster, 3000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [hideToaster, state]);

  const memoizedValue = useMemo(
    () => ({ showToaster, state }),
    [showToaster, state],
  );

  return (
    <ToasterContext.Provider value={memoizedValue}>
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => useContext(ToasterContext);

export default ToasterProvider;
