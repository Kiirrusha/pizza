import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export const Menu = () => {
  return (
    <>
      <Button onClick={() => setcounter(1)} variant="big">
        Кнопка
      </Button>
      <Button onClick={() => setcounter(1)} variant="small">
        Кнопка
      </Button>
      <Input placeholder="email" />
      <p>Menu</p>
    </>
  );
};
