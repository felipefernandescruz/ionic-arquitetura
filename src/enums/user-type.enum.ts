export class UserType {
    
        public static readonly Customer = new UserType(1, "CUSTOMER");
        public static readonly Commerce = new UserType(2, "COMMERCE");
    
        public Id: number;
        public Name: string;
    
        constructor(id: number, name: string) {
            this.Id = id;
            this.Name = name;
        }
    
        public static List() {
            return [
                this.Customer, this.Commerce
            ];
        }
    }