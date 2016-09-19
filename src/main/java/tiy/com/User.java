package tiy.com;

/**
 * Created by jessicatracy on 9/19/16.
 */
import javax.persistence.*;

@Entity
@Table(name = "todousers")
public class User {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false, unique = true)
    String name;

    @Column(nullable = false)
    String password;

    public User() {
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
