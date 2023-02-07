import { useEffect, useState } from "react";
import clsx from "clsx";

import Modal from "./modal";
import MoneyIcon from "../assets/money-icon";
import PeopleIcon from "../assets/people-icon";
import { Barbecue } from "../utils/types";

const BarbecueDetails = (props: Barbecue) => {
  const { date, description, guestAndContribution } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestsAmount, setGuestsAmount] = useState(0);
  const [contributionAmount, setContributionAmount] = useState(0);
  const [check, setCheck] = useState(
    new Array(guestAndContribution.length).fill(false)
  );

  const onClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(() => !isModalOpen);
  };

  const handleOnCheck = (position: number) => {
    setCheck(check.map((item, index) => (index === position ? !item : item)));
  };

  useEffect(() => {
    if (guestAndContribution.length > 0) {
      setGuestsAmount(guestAndContribution.length);
      setContributionAmount(
        guestAndContribution.reduce(
          (total, curr) => (total = total + curr.contribution),
          0
        )
      );
    }
  }, [guestAndContribution]);

  return (
    <>
      <div
        className="flex flex-col justify-between py-5 px-6 w-[282px] h-48 rounded-sm bg-white shadow cursor-pointer"
        onClick={onClick}
      >
        <div>
          <h2>{date}</h2>
          <h1 className="text-xl truncate">{description}</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <PeopleIcon />
            <p className="text-xl pl-2">{guestsAmount}</p>
          </div>
          <div className="flex items-center">
            <MoneyIcon />
            <p className="text-xl pl-2">R$ {contributionAmount}</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <div className="flex justify-between pb-10">
            <div>
              <h2>{date}</h2>
              <h1 className="text-5xl font-semibold">{description}</h1>
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="flex items-center">
                <PeopleIcon />
                <p className="text-xl pl-2">{guestsAmount}</p>
              </div>
              <div className="flex items-center">
                <MoneyIcon />
                <p className="text-xl pl-2">R$ {contributionAmount}</p>
              </div>
            </div>
          </div>
          <div className="max-h-96 overflow-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="sr-only">Pagamento realizado</th>
                  <th className="sr-only">Convidado</th>
                  <th className="sr-only">Contribuição</th>
                </tr>
              </thead>
              <tbody>
                {guestAndContribution?.map((item, index) => (
                  <tr
                    key={index + item.guest}
                    className="border-b border-primary h-10"
                  >
                    <td className="block mt-1 min-w-[45px]">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={item.guest}
                        value={item.guest}
                        checked={check[index]}
                        onChange={() => handleOnCheck(index)}
                      />
                    </td>
                    <td className="w-full text-xl font-semibold ">
                      {item.guest}
                    </td>
                    <td
                      className={clsx("min-w-[70px] text-xl font-semibold", {
                        "line-through": check[index],
                      })}
                    >
                      R$ {item.contribution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BarbecueDetails;
