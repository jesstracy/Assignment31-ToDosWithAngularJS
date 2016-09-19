package tiy.com;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by jessicatracy on 9/19/16.
 */
public interface UserRepository extends CrudRepository<User, Integer> {
    User findFirstByName(String name);
}
