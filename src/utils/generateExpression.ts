import { getNumber } from ".";
import { Operation } from "../enums";

export type ExpressionComponents = {
  leftOperand: number;
  rightOperand: number;
  operation: Operation;
  result: number;
};

export const generateExpression = (): ExpressionComponents => {
  const operands = [getNumber(), getNumber()];

  const leftOperand = Math.max(...operands);
  const rightOperand = operands.find((op) => op !== leftOperand) ?? 1;
  const operation = Math.random() >= 0.5 ? Operation.PLUS : Operation.MINUS;

  let result = null;
  switch (operation) {
    case Operation.MINUS:
      result = leftOperand - rightOperand;
      break;

    case Operation.PLUS:
      result = leftOperand + rightOperand;
      break;

    default:
      result = -1;
  }

  return {
    leftOperand,
    rightOperand,
    operation,
    result,
  };
};
