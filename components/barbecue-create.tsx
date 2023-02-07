import { useState } from "react";
import clsx from "clsx";

import Modal from "./modal";
import AddIcon from "../assets/add-icon";
import DeleteIcon from "@/assets/delete-icon";
import { Barbecue } from "../utils/types";
import Button from "../components/button";

type BarbecueCreateProps = {
  handleCloseModal: () => void;
  onChange: (arg: any) => void;
};

const BarbecueCreate = (props: BarbecueCreateProps) => {
  const { handleCloseModal, onChange } = props;
  const [guest, setGuest] = useState("");
  const [contribution, setContribution] = useState(0);
  const [barbecue, setBarbecue] = useState<Barbecue>({
    date: "",
    description: "",
    guestAndContribution: [],
  });
  const isGuestEmpty = guest === "" && contribution === 0;
  const isBarbecueEmpty =
    barbecue.date === "" ||
    barbecue.description === "" ||
    barbecue.guestAndContribution.length === 0;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarbecue({
      ...barbecue,
      date: event?.target?.value,
    });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBarbecue({
      ...barbecue,
      description: event?.target?.value,
    });
  };

  const handleGuestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuest(event?.target?.value);
  };

  const handleContributionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContribution(Number(event?.target?.value));
  };

  const handleAddGuest = () => {
    if (!isGuestEmpty) {
      setBarbecue({
        ...barbecue,
        guestAndContribution: [
          ...barbecue.guestAndContribution,
          {
            guest: guest,
            contribution: contribution,
          },
        ],
      });
      setGuest("");
      setContribution(0);
    }
  };

  const handleDeleteGuest = (guestName: string) => {
    setBarbecue({
      ...barbecue,
      guestAndContribution: barbecue.guestAndContribution.filter((item) => {
        return item.guest !== guestName;
      }),
    });
  };

  const handleModalAction = () => {
    onChange(barbecue);
  };

  return (
    <Modal onCloseModal={handleCloseModal}>
      <h1 className="mb-4 text-4xl font-bold text-gray-900 text-center">
        Adicionar churras
      </h1>
      <div className="space-y-6">
        <div>
          <label htmlFor="date" className="label">
            Data
          </label>
          <input
            type="date"
            name="date"
            className="input"
            required
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="label">
            Descrição do evento
          </label>
          <input
            type="text"
            name="description"
            placeholder="Escreva a descrição do evento"
            className="input"
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="guest" className="label">
            Convidados e Contribuição
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              name="guest"
              value={guest}
              placeholder="Escreva o nome do convidado"
              className="input"
              onChange={handleGuestChange}
              required
            />
            <input
              type="number"
              name="contribution"
              value={contribution}
              placeholder="R$00,00"
              className="input w-1/2"
              min="1"
              onChange={handleContributionChange}
              required
            />
            <Button
              color="outline"
              className="rounded-sm"
              disabled={isGuestEmpty}
              onClick={handleAddGuest}
            >
              <AddIcon className="w-5 h-5" />
              <span className="sr-only">Adicionar convidado</span>
            </Button>
          </div>
          <p className="text-xs pt-2 pb-4 text-gray-500">
            Contribuição sugerida: R$20,00 com bebida, R$10,00 sem bebida.
          </p>
          <div className="max-h-44 overflow-auto">
            <table className="m-0">
              <thead>
                <tr>
                  <th
                    className={clsx("label", {
                      hidden: barbecue?.guestAndContribution.length === 0,
                    })}
                  >
                    Lista de Convidados
                  </th>
                </tr>
              </thead>
              <tbody>
                {barbecue?.guestAndContribution?.map((item, index) => (
                  <tr
                    key={index + item.guest}
                    className="border-b border-primary h-10"
                  >
                    <td className="w-full">{item.guest}</td>
                    <td className="min-w-[70px]">R$ {item.contribution}</td>
                    <td className="min-w-[30px]">
                      <Button
                        color="outline"
                        className="rounded-full"
                        onClick={() => handleDeleteGuest(item.guest)}
                      >
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">
                          Excluir convidado {item.guest}
                        </span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Button
          disabled={isBarbecueEmpty}
          onClick={handleModalAction}
          color="primary"
        >
          Adicionar
        </Button>
      </div>
    </Modal>
  );
};

export default BarbecueCreate;
