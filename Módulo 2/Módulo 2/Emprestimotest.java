import static org.junit.jupiter.api.Assertions.*;
import java.util.Date;

class EmprestimoTest {

    Date dataRetirada = new Date();
    Date dataDevolucao = new Date();
    Livro livro = new Livro("Java Basics", new Autor("Alan Turing", "Inglês"), "Tecnologia", true);
    Usuario usuario = new Usuario("Gabriel", 21);
    Emprestimo emprestimo = new Emprestimo(usuario, livro, dataRetirada, dataDevolucao);

    @Test
    void testGetUsuario() {
        assertEquals("Gabriel", emprestimo.getUsuario().getNome());
    }

    @Test
    void testGetLivro() {
        assertEquals("Java Basics", emprestimo.getLivro().getTitulo());
    }

    @Test
    void testGetDataRetirada() {
        assertEquals(dataRetirada, emprestimo.getDataRetirada());
    }

    @Test
    void testGetDataDevolucao() {
        assertEquals(dataDevolucao, emprestimo.getDataDevolucao());
    }

    @Test
    void testSetDataDevolucao() {
        Date novaData = new Date();
        emprestimo.setDataDevolucao(novaData);
        assertEquals(novaData, emprestimo.getDataDevolucao());
    }
}
}
