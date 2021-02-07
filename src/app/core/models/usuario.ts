import { Deserializable } from "./deserializable";

export class Usuario implements Deserializable {
    
    user!: string;
    email!: string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    
}
