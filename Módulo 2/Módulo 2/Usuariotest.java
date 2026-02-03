import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class UsuarioTest {

    Usuario usuario = new Usuario("Gabriel", 21);

    @Test
    void testGetNome() {
        assertEquals("Gabriel", usuario.getNome());
    }

    @Test
    void testGetIdade() {
        assertEquals(21, usuario.getIdade());
    }

    @Test
    void testSetNome() {
        usuario.setNome("Kaio");
        assertEquals("Kaio", usuario.getNome());
    }

    @Test
    void testSetIdade() {
        usuario.setIdade(30);
        assertEquals(30, usuario.getIdade());
    }
}