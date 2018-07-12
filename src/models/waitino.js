'use strict';

module.exports = (sequelize, DataTypes) => {
  const Waitino = sequelize.define('data_waitino_take_aggregate', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,      
    },
    value: {
      type: DataTypes.DECIMAL(14,8),
      allowNull: false,      
    },   
  },
  {
    freezeTableName: true,
  // define the table's name
    tableName: 'data_waitino_take_aggregate',
    timestamps: false
  }
);  
  return Waitino;
};
