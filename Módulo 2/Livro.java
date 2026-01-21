public class Livro {
    private String titulo;
    private String genero;
    private Autor autor;
    private boolean disponivel;

    public Livro(String titulo, String genero, Autor autor) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.disponivel = true; // por padrão, disponível
    }

    // Getters e Setters
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }
}
