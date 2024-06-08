import { Button } from "@mui/material";
import { getNumber } from "../../utils";
import styles from "./Answers.module.css";

type AnswersProps = {
  correctAnswer: number;
  onSelectAnswer: (answer: number) => void;
  isDisabled?: boolean;
};

export const Answers = ({ correctAnswer, onSelectAnswer, isDisabled = false }: AnswersProps) => {
  const correctAnswerIndex = getNumber(5);
  const answers = new Array(5).fill(null).map((_, i) => (i === correctAnswerIndex ? correctAnswer : getNumber(10)));

  return (
    <ul className={styles.list}>
      {answers.map((a, i) => {
        return (
          <li key={i}>
            <Button
              disabled={isDisabled}
              onClick={() => onSelectAnswer(answers[i])}
              sx={{ fontSize: "64px", width: "128px", fontFamily: "inherit" }}
              variant="contained"
              size="large"
            >
              {a}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
