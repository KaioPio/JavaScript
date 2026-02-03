import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LivroTest {

    Autor autor = new Autor("Jess", "Brasileira");
    Livro livro1 = new Livro("Java Basico", autor, "tecnologia", true);
    Livro livro2 = new Livro("Java Avançado", autor, "tecnologia", false);

    @Test
    void testGetTitulo() {
        assertEquals("Java Basico", livro1.getTitulo());
    }

    @Test
    void testGetAutor() {
        assertEquals("Jess", livro1.getAutor().getNome());
    }

    @Test
    void testGetCategoria() {
        assertEquals("tecnologia", livro1.getCategoria());
    }

    @Test
    void testDisponibilidadeTrue() {
        assertTrue(livro1.isDisponivel());
    }

    @Test
    void testDisponibilidadeFalse() {
        assertFalse(livro2.isDisponivel());
    }

    @Test
    void testSetDisponibilidade() {
        livro1.setDisponivel(false);
        assertFalse(livro1.isDisponivel());
    }
}