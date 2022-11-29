import React, { PropsWithChildren } from "react";

export const Test = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-6 border">test</div>
        <div className="col-span-3 border">test</div>
        <div className="col-span-2 border">test</div>
        <div className="col-span-1 border">test</div>
      </div>
      <GridContainer>
        <GridItem size={6}>
          <div className="border w-full">test</div>
        </GridItem>
        <GridItem size={3}>
          <div className="border w-full">test</div>
        </GridItem>
        <GridItem size={2}>
          <div className="border w-full">test</div>
        </GridItem>
        <GridItem size={1}>
          <div className="border w-full">test</div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const GridContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-12">{children}</div>;
};

interface TestProps extends PropsWithChildren<{}> {
  size?: number;
}
const GridItem: React.FC<TestProps> = ({ size, children }) => {
  return <div className={`border col-span-${size ? size : 1}`}>{children}</div>;
};

export default Test;
