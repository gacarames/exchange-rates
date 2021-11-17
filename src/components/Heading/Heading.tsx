import React, { FC, ReactNode } from "react";
// import ReactDOM from 'react-dom';

interface HeadingProps {
    children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => <h1>{children}</h1>;

export default Heading;
