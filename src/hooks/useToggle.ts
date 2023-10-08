import { useCallback, useState } from "react";

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = useCallback(() => {
    setValue((val: boolean) => !val);
  }, []);
  return [value, toggleValue];
};

export default useToggle;
