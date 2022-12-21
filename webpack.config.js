const path = require("path");

module.exports = {
    mode: "development",
    entry: "./public/app.js",
    output: {
        filename:"main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
    