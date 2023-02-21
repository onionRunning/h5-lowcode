export const htmlTemplate = (htmlStr: string, cssStr: string, jsStr: string) => `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="yes" name="apple-mobile-web-app-capable" />
  <meta content="yes" name="apple-touch-fullscreen" />
  <meta content="telephone=no,email=no" name="format-detection" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <title>内购页version</title>
  <style>
    ${cssStr}
  </style>
</head>
<body>
  <div id="app">
    ${htmlStr}
  </div>
  <script>
    window.onload = function() {
      //
      ${jsStr}
    }
  </script>            
</body>
</html>


`
