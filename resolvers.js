// resolvers.js

const Employee = require('./models/Employee');

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find();
    },
    employee: async (_, { id }) => {
      return await Employee.findById(id);
    },
  },
  Mutation: {
    createEmployee: async (_, { input }) => {
      const employee = new Employee(input);
      await employee.save();
      return employee;
    },
    createEmployees: async (_, { input }) => {
        const employees = await Employee.insertMany(input);
        return employees;
      },
    updateEmployee: async (_, { id, input }) => {
      return await Employee.findByIdAndUpdate(id, input, { new: true });
    },
    deleteEmployee: async (_, { id }) => {
      return await Employee.findByIdAndRemove(id);
    },
  },
};

module.exports = resolvers;
