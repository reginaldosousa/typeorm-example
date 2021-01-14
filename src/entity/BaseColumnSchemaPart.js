export const BaseColumnSchemaPart = {
  id: {
    type: "int",
    primary: true,
    generated: true,
  },
  createdAt: {
    name: 'created_at',
    type: 'timestamp',
    createDate: true,
  },
  updatedAt: {
    name: 'updated_at',
    type: 'timestamp',
    updateDate: true,
  }
}
