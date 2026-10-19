module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs"
    },
    rules: {
      'no-var': 'error',          // Prohibido usar 'var'
      'prefer-const': 'error',    // Obligatorio 'const' si el valor no cambia
      'no-console': 'warn',       // Advertencia si usas console.log
      'prefer-template': 'error', // Obligatorio usar Hola ${nombre} en vez de "Hola " + nombre
      'no-unused-vars': 'error'   // Error si declaras variables que no usas
    }
  }
];
