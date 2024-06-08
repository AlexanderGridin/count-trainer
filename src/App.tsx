import { useState } from "react";
import { Expression } from "./components/Expression";
import { ExpressionComponents, generateExpression } from "./utils";
import { Answers } from "./components/Answers";
import { Button, Stack } from "@mui/material";
import styles from "./App.module.css";

export const App = () => {
  const [result, setResult] = useState<number | null>(null);
  const [expComps, setExpComps] = useState<ExpressionComponents>(generateExpression());
  const { result: srcResult } = expComps;
  const isCorrectAnswer = Boolean(result && result === srcResult);

  const handleSelectAnswer = (answer: number) => {
    setResult(answer);
  };

  const handleNewLap = () => {
    setExpComps(generateExpression());
    setResult(null);
  };

  return (
    <div className={styles.container}>
      <Expression {...expComps} result={result} isAnswerCorrect={isCorrectAnswer} />

      {result !== null ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "rgba(255,255,255,0.95)", padding: "16px", boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
        >
          <Button onClick={handleNewLap} sx={{ fontSize: "32px" }} variant="outlined" size="large" disabled={!result}>
            Next
          </Button>
        </Stack>
      ) : null}

      <div style={{ padding: "32px 0", boxShadow: "0 0 15px rgba(0,0,0,0.3)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Answers correctAnswer={srcResult} onSelectAnswer={handleSelectAnswer} isDisabled={result !== null} />
      </div>
    </div>
  );
};
