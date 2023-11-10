export { registerPermissionActions };

async function registerPermissionActions() {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Import',
      uid: 'import',
      pluginName: 'import-export-entries',
    },
    {
      section: 'plugins',
      displayName: 'Export',
      uid: 'export',
      pluginName: 'import-export-entries',
    },
  ];

  await (strapi).admin.services.permission.actionProvider.registerMany(actions);
}

module.exports = async () => {
  registerPermissionActions
}
