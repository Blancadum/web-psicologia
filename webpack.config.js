const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Punto de entrada principal
  entry: "./src/client/index.jsx", // Ajusta según la estructura de tus archivos

  // Configuración de salida
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // Asegura rutas absolutas correctas
  },

  // Modo de compilación
  mode: "development", // Cambia a "production" para producción

  // Configuración de los loaders
  module: {
    rules: [
      // Loader para JS y JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      // Loader para CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      // Loader para imágenes
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "src/client/assets/images/[hash][ext][query]",
        },
      },

      // Loader para fuentes
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },

  // Configuración de resolución de módulos
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/client/components"),
      "@images": path.resolve(__dirname, "src/client/assets/images"), // Alias para imágenes
      "@styles": path.resolve(__dirname, "src/client/styles"), // Alias para estilos
    },
  },

  // Configuración de plugins
  plugins: [
    new CleanWebpackPlugin(), // Limpia la carpeta "dist" antes de cada build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Archivo HTML base
      filename: "index.html", // Nombre del archivo HTML generado
      inject: "body", // Inserta los scripts al final del body
    }),
  ],

  // Habilita source maps para depuración
  devtool: "source-map",

  // Configuración del servidor de desarrollo
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 4000, // Cambia el puerto si ya está en uso
    historyApiFallback: true, // Habilita rutas internas para React Router
    hot: true, // Hot Module Replacement
  },
};
