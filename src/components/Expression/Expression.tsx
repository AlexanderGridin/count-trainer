import { Operation } from "../../enums";
import styles from "./Expression.module.css";

type ExpressionProps = {
  leftOperand: number;
  rightOperand: number;
  operation: Operation;
  result: number | null;
  isAnswerCorrect: boolean;
};

export const Expression = ({ leftOperand, rightOperand, operation, result, isAnswerCorrect }: ExpressionProps) => {
  return (
    <div className={`${styles.expression} ${result ? (isAnswerCorrect ? styles.correct : styles.wrong) : ""}`}>
      {leftOperand} {operation} {rightOperand} = {result ?? "?"}
    </div>
  );
};
