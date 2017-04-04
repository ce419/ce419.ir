from http.server import *


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
      self.send_response(200)
      self.send_header('Content-type', 'text/html')
      self.end_headers()
      message = 'Hello world!'
      self.wfile.write(bytes(message, 'utf8'))


def run():
    print('Starting...')
    server_address = ('localhost', 8000)
    httpd = HTTPServer(server_address, MyServer)
    print('Running...')
    httpd.serve_forever()


run()
