import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

import BarbecueDetails from "../components/barbecue-details";
import BarbecueCreate from "../components/barbecue-create";
import BarbecueIcon from "../assets/barbecue-icon";
import { Barbecue } from "../utils/types";

interface Props {}

const Schedule: NextPage<Props> = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [barbecues, setBarbecues] = useState<Barbecue[]>([]);

  const handleModal = () => {
    setIsModalOpen(() => !isModalOpen);
  };

  const handleChange = (barbecue: Barbecue) => {
    setBarbecues([...barbecues, barbecue]);
    handleModal();
  };

  return (
    <div className="p-6">
      <Head>
        <title>Agenda</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="barbecues-cards mt-[-72px]">
        {barbecues?.map((barbecue, index) => (
          <BarbecueDetails
            key={index + barbecue.description}
            date={barbecue.date.slice(5, 10).split("-").reverse().join("/")}
            description={barbecue.description}
            guestAndContribution={barbecue.guestAndContribution}
          />
        ))}
        <button
          type="button"
          onClick={handleModal}
          className="flex flex-col justify-center items-center w-[282px] h-48 py-5 px-6 rounded-sm bg-gray shadow"
        >
          <BarbecueIcon className="w-24 h-24 p-6 bg-primary rounded-full" />
          <span className="text-xl font-semibold mt-1">Adicionar churras</span>
        </button>
      </div>
      {isModalOpen && (
        <BarbecueCreate
          handleCloseModal={handleModal}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Schedule;
