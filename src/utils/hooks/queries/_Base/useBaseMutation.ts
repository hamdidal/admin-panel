import { useEffect } from "react";
import { useMutation } from "react-query";

import useNotify from "../../notify/useNotify";
import { UseBaseMutationParams } from "./types";

const useBaseMutation = ({
  service,
  onSuccess,
  onLoading,
  onError,
}: UseBaseMutationParams) => {
  const { notify, removeAllToast } = useNotify();
  const { mutate, data, isError, isSuccess, isLoading, error } =
    useMutation(service);

  useEffect(() => {
    if (isLoading) {
      if (onLoading.messageDisplay) {
        notify({
          message: onLoading.message || "loading message",
          type: "loading",
        });
      }
      if (onLoading && onLoading.callback) {
        onLoading.callback();
      }
    }
    if (isSuccess) {
      if (onSuccess.messageDisplay) {
        removeAllToast();
        notify({ message: onSuccess.message || "success message" });
      }
      if (onSuccess && onSuccess.callback) {
        onSuccess.callback();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, isLoading]);

  return { mutate, data, isError, isSuccess, isLoading, error };
};

export default useBaseMutation;
