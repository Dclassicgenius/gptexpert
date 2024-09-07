import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioButtonGroup() {
  return (
    <RadioGroup defaultValue="">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="" id="r1" />
        <Label htmlFor="r1">Все</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="active" id="r2" />
        <Label htmlFor="r2">Активен</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="inactive" id="r3" />
        <Label htmlFor="r3">Неактивен</Label>
      </div>
    </RadioGroup>
  );
}
