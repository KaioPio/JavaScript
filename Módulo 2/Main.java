import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Autor autor = new Autor("Jessica Felix", 30);
        Livro livro = new Livro("Java for Beginners", "Tecnologia", autor);
        Usuario usuario = new Usuario("Lucas Rafael", 25);

        Date retirada = new Date(1715210241000L); // exemplo de data fixa
        Date devolucao = new Date(1715210241000L);

        Emprestimo emprestimo = new Emprestimo(livro, usuario, retirada, devolucao);

        // Impressão dos resultados
        if (!livro.isDisponivel()) {
            System.out.println("O livro não está disponível");
        }

        System.out.println("Livro: " + emprestimo.getLivro().getTitulo());
        System.out.println("Autor: " + emprestimo.getLivro().getAutor().getNome());
        System.out.println("Genero: " + emprestimo.getLivro().getGenero());
        System.out.println("Usuario: " + emprestimo.getUsuario().getNome());
        System.out.println("Idade: " + emprestimo.getUsuario().getIdade());
        System.out.println("Data de Retirada: " + emprestimo.getDataRetirada());
        System.out.println("Data de Devolucao: " + emprestimo.getDataDevolucao());
    }
}
