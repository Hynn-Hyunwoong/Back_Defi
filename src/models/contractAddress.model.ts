import { Model, DataTypes, Sequelize } from 'sequelize';

export class ContractAddress extends Model {
  public name!: string;
  public address!: string;
}

export const initializeContractAddress = (sequelize: Sequelize) => {
  ContractAddress.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'ContractAddress',
    },
  );
  console.log('Ready to ContractAddress Model Initialize');
};
