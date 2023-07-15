import { Model, DataTypes, Sequelize } from 'sequelize';

export class ProposalList extends Model {
  public transaction!: string;
  public title!: string;
  public body!: string;
}

export const initializeContractAddress = (sequelize: Sequelize) => {
  ProposalList.init(
    {
      transaction: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'ProposalList',
    },
  );
  console.log('Ready to Proposal Model Initialize');
};
