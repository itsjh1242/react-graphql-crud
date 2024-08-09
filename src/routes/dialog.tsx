import CustomDialog from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Dialog = () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const showDialog = () => {
    setIsDialogOpened(true);
  };
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <CustomDialog isOpen={isDialogOpened} setIsOpen={setIsDialogOpened} dialogTitle="접근 제한">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">본 서비스는 로그인이 필요합니다..</p>
        </div>
      </CustomDialog>
      <Button
        onClick={() => {
          showDialog();
        }}
      >
        Show Dialog
      </Button>
    </div>
  );
};
