export class Organisation {
  id: number;
  name: String;
  industry: String;
  employees: number;
  contact: String;
  email: String;

  constructor(id:number, name:String, industry:String, employees:number, contact:String, email:String) {
    this.id = id;
    this.name = name;
    this.industry = industry;
    this.employees = employees;
    this.contact = contact;
    this.email = email;
  }

}
