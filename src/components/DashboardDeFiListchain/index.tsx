import React from "react";
import { Text, SeekBar, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  bitcoin?: string;
  price?: string;
  p71sixtyeight?: string;
}

export default function DashboardDeFiListchain({ bitcoin, price, p71sixtyeight, ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-center items-center gap-3">
            <Button className="flex items-center justify-center h-[32px] w-[32px] bg-yellow-900 rounded-[50%]">
              <Img src="images/img_frame_6.svg" />
            </Button>
            {!!bitcoin ? (
              <Heading as="h1" className="capitalize">
                {bitcoin}
              </Heading>
            ) : null}
          </div>
          {!!price ? (
            <Heading as="h2" className="self-end mb-[5px] capitalize text-right">
              {price}
            </Heading>
          ) : null}
        </div>
        <div className="flex justify-center items-start gap-2">
          <SeekBar
            inputValue={[50]}
            trackColors={["", "#353535"]}
            className="flex h-[8px] mt-[3px] flex-1 rounded"
            trackClassName="h-[8px] w-full bg-gradient rounded"
            thumbClassName="flex justify-center items-center h-[8px] w-[168px] rounded outline-none bg-blue_gray-900"
          />
          {!!p71sixtyeight ? (
            <Text size="md" as="p" className="!text-white-A700 capitalize text-right">
              {p71sixtyeight}
            </Text>
          ) : null}
        </div>
      </div>
    </div>
  );
}
