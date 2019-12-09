module:{
    rules:[
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             },
             {
                test: /\.(png|svg|jpg|gif)$/,
                    use: [
                      'file-loader',
                    ]
            },
            {
                css: {
                    loaderOptions: {
                      sass: {
                        data: `
                        @import "@/scss/_base.scss";
                        @import "@/scss/_components.scss";
                         @import "@/scss/_layout.scss";
                          @import "@/scss/_reset.scss";
                          @import "@/scss/_mixins.scss";
                        `
                      }
                    }
                  }
                }
            ]
    }