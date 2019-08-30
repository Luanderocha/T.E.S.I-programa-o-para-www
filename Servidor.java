package sockets;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Servidor {

	public static void main(String[] args) throws IOException {

		try {
			ServerSocket servidor = new ServerSocket(8080);
			System.out.println("Servidor iniciado na porta 8080...");
			System.out.println("Aguardando conexão");
			
			Socket cliente = servidor.accept();
			System.out.println("cliente conectado");
			
			BufferedReader entrada = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
			BufferedWriter saida = new BufferedWriter(new OutputStreamWriter(cliente.getOutputStream()));

			
			String linha = entrada.readLine();
			
			while (linha != null) {
				System.out.println(linha);
				linha = entrada.readLine();
				if (linha.isEmpty()) {
					break;
				}
			}

			saida.write("HTTP/1.1 200 OK\r\n");
			saida.write("Server: Apache/2.5 \r\n");

			String mensagem = "<html><body><h3>HELLO WOLRD!</h3></body></html>";
            saida.write("Content-Length: " + mensagem.getBytes().length + "\r\n");
            saida.write("Content-Type: text/html; charset=utf-8\r\n");
            saida.write("Connection: Closed\r\n");
            saida.write("\r\n");
			saida.write(mensagem);

			saida.close();
			entrada.close();
			cliente.close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
