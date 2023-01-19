import { CheckSquare } from "phosphor-react";
import React from "react";
import ButtonWatchIntro from "./ButtonWatchIntro";

const StartupDesined = ({ inverted }) => {
  return (
    <div className="grid grid-cols-2 gap-12 p-20 bg-[#f3f3f3]">
      <div className="w-full">
        <img
          className="w-full mix-blend-multiply -my-40"
          src="/assets/design.webp"
          alt="a"
        />
      </div>
      <div
        className={`flex flex-col h-full justify-center ${
          inverted ? "row-[1]" : "row-[0]"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h1>Destiny isn`t A.I, its result of human intelligence.</h1>
            <p>
              No home mel, eu persecuti, id ius mutat gubergreen, eros harum
              henderit ex eos, in qua vocibus inimics gubergren
            </p>
          </div>
          <div className="flex flex-col justify-start m-0">
            <div className="flex justify-start items-center m-0">
              <CheckSquare className="m-0 mr-1" size={10} />
              <p className="">Write some features here.</p>
            </div>
            <div className="flex justify-start items-center m-0">
              <CheckSquare className="m-0 mr-1" size={10} />
              <p>Repat the same with another one.</p>
            </div>
            <div className="flex justify-start items-center m-0">
              <CheckSquare className="m-0 mr-1" size={10} />
              <p>Write some features here.</p>
            </div>
          </div>
          <ButtonWatchIntro />
        </div>
      </div>
    </div>
  );
};

export default StartupDesined;
