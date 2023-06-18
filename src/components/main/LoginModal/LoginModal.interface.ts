import React from "react";

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserInfo {
    id: string;
    password: string;
}

export interface InputProps {
    inputs: UserInfo;
    setInputs: React.Dispatch<React.SetStateAction<UserInfo>>;
    setErrors: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginLayoutProps {
    setCondition: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginModalTitleProps {
    tabClick: string;
    setTabClick: React.Dispatch<React.SetStateAction<string>>;
}

export interface ButtonsProps {
    tabClick: string;
    errors: string;
}