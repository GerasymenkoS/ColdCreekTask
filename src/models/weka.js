'use strict';

module.exports = (sequelize, DataTypes) => {
  const Weka = sequelize.define('data_weka_take_aggregate', {
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
    tableName: 'data_weka_take_aggregate',
    timestamps: false
  }
);  

  return Weka;
};