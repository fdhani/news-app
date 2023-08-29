import { useToaster } from "@/context/toaster";
import getSourceListError from "@/repository/get-source-list-error";

const useTriggerError = () => {
  const { showToaster } = useToaster();
  const triggerError = async () => {
    try {
      await getSourceListError();
    } catch (error) {
      showToaster(error.message);
    }
  };

  return triggerError;
};

export default useTriggerError;
