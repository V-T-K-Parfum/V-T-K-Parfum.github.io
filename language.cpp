#include <iostream>
#include <string>

class Perfume {
public:
    std::string name;
    std::string description;

    Perfume(std::string n, std::string d) : name(n), description(d) {}

    void display() {
        std::cout << "Perfume: " << name << "\nDescription: " << description << std::endl;
    }
};

int main() {
    Perfume signature("Signature Scent", "A blend of floral and woody notes.");
    signature.display();
    return 0;
}
