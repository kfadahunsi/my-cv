export type ProjectProps = {
    projRef: React.RefObject<null|HTMLDivElement>
}

export type IntroProps = {
    projRef: React.RefObject<null|HTMLDivElement>
    contactRef: React.RefObject<null|HTMLDivElement>
}
export type ContactProps = {
    contactRef: React.RefObject<null|HTMLDivElement>
}

export type FormError = {
    name: string
    email: string
    subject: string
    message: string
}