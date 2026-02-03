import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AutorTest {

    Autor autor = new Autor("Jess", "Brasileira");

    @Test
    void testGetNome() {
        assertEquals("Jess", autor.getNome());
    }

    @Test
    void testGetNacionalidade() {
        assertEquals("Brasileira", autor.getNacionalidade());
    }

    @Test
    void testSetNome() {
        autor.setNome("Carlos");
        assertEquals("Carlos", autor.getNome());
    }

    @Test
    void testSetNacionalidade() {
        autor.setNacionalidade("Português");
        assertEquals("Português", autor.getNacionalidade());
    }
}