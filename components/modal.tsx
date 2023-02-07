import { ReactNode } from "react";
import CloseIcon from "../assets/close-icon";

type ModalProps = {
  onCloseModal: () => void;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  const { onCloseModal, children } = props;

  return (
    <section className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto inset-0 h-modal h-full bg-gray-400 bg-opacity-50">
      <div className="flex justify-center items-start min-h-screen w-full h-full pt-40">
        <div className="relative bg-white rounded-sm shadow min-w-[90%] sm:min-w-[636px] pb-6">
          <button
            type="button"
            onClick={onCloseModal}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <CloseIcon className="w-5 h-5" />
            <span className="sr-only">Fechar modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
