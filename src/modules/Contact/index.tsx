import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:kris.bulte@we-futurize.be"
                            target="_blank"
                        >
                            <h3>kris.bulte@we-futurize.be</h3>
                            <p>
                                You can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>We Futurize HQ</h3>
                        <p>Rue de la station de papignies</p>
                        <p>7861 Papignies, Belgium</p>
                        <p>BE0730988436</p>
                    </TextBox>
                </FadeIn>
                </S.ContactBox>
               
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>We Futurize (Eylenbosch site)</h3>
                        <p>Ninoofstesteenweg</p>
                        <p>1703 Schepdaal, Belgium</p>
                        <p>BE0730988436</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
