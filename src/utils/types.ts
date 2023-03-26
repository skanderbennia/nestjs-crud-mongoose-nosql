export type CreateEmployeeBody = {
  email: string;
  name: string;
  title: string;
};

export type UpdateEmployeeBody = {
  email?: string;
  name?: string;
  title?: string;
};
