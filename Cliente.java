package sockets;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Cliente {

	public static void main(String[] args) throws IOException {

		Socket cliente = new Socket("www.cesed.br", 80);

		PrintWriter saida = new PrintWriter(cliente.getOutputStream());

		saida.println("GET /portal HTTP/1.1");
		saida.println("Host: www.cesed.br");
		saida.println("Connection: Close");
		saida.println();
		saida.flush();

		BufferedReader entrada = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
		String linha = entrada.readLine();
		while (linha != null) {
			System.out.println(linha);
			linha = entrada.readLine();
		}

		entrada.close();
		saida.close();
		cliente.close();

	}
}
